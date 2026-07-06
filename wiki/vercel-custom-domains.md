# Vercel Custom Domains

How to connect a registered domain to a Vercel project. Two paths: dashboard (Settings → Domains) or CLI (`vercel domains`). Hobby teams have a limit of 50 custom domains per project. (source: vercel-add-domain.md)

## Setup paths

### Path A: External DNS (e.g. Cloudflare registrar)

Buy domain at a registrar like Cloudflare (cheapest — see [[domain-registrars]]). Keep the registrar's DNS. Add Vercel records in the registrar's dashboard.

1. `vercel domains add example.com`
2. `vercel domains inspect example.com` — note required records
3. Add A/CNAME records in registrar's DNS dashboard
4. `vercel domains inspect example.com` — verify detection

Cannot use `vercel dns add` commands with external DNS. (source: vercel-custom-domain-setup.md)

### Path B: Vercel nameservers

Point domain's nameservers to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). DNS records auto-created for apex and first-level subdomains — no manual A/CNAME needed. Required for wildcard domains. (source: vercel-working-with-nameservers.md)

Benefits:
- Automatic DNS record creation (no manual CNAME for each subdomain)
- Wildcard domain support
- Manage everything from Vercel dashboard

Trade-off: lose registrar's DNS features (e.g. Cloudflare CDN/DDoS at the DNS layer). (source: vercel-working-with-nameservers.md)

### Path C: Buy through Vercel

Vercel acts as registrar. Nameservers, DNS, SSL, and renewals all auto-configured. No setup needed — it just works. Vercel does not log search history for marketing. Purchases and renewals are final. (source: vercel-working-with-domains.md)

## CLI quick reference

```bash
vercel domains ls                              # list all domains
vercel domains add example.com                 # add to project
vercel domains add www.example.com             # add www separately
vercel domains inspect example.com             # check DNS status + required records
vercel dns add example.com '@' A 76.76.21.21   # apex A record (Vercel NS only)
vercel dns add example.com www CNAME cname.vercel-dns-0.com  # www CNAME (Vercel NS only)
vercel dns ls                                  # list DNS records
vercel certs ls                                # check SSL certificates
vercel httpstat /                              # test with timing breakdown
vercel dns import [domain] [zonefile]          # import zone file from external provider
```

(source: vercel-custom-domain-setup.md, vercel-managing-dns-records.md)

## Dashboard setup

1. Project → **Settings** → **Domains** → **Add Domain**
2. Enter domain name
3. Vercel shows required DNS configuration (A record for apex, CNAME for subdomain)
4. Configure records at your registrar or via Vercel nameservers
5. Wait for verification — status updates in the UI

If the domain is used by another Vercel account, a TXT record is required to verify ownership. (source: vercel-add-domain.md)

## DNS record values

| Domain type | Record | Value |
|------------|--------|-------|
| Apex (`example.com`) | A | `76.76.21.21` |
| Subdomain (`www.example.com`) | CNAME | project-specific (e.g. `d1d4fc829fe7bc7c.vercel-dns-017.com`) |

Each project gets a unique CNAME value. Run `vercel domains inspect example.com` to see your project's exact values. (source: vercel-add-domain.md, vercel-custom-domain-setup.md)

See [[dns-records]] for what A and CNAME records are.

## www vs apex: Vercel's recommendation

Vercel recommends **`www` as the primary domain** with a redirect from the apex. Reasons:

1. **CNAME > A record.** The DNS spec forbids CNAME at the apex (RFC 1034 §3.6.2). Subdomains like `www` can use CNAME, which avoids hard-coding an IP. This lets Vercel steer traffic during DDoS attacks or for performance optimization. (source: vercel-deploying-redirecting-domains.md)

2. **Scope isolation.** Cookies and CAA records set on the apex apply to all subdomains. Setting them on `www` limits scope to just `www`. (source: vercel-working-with-domains.md)

3. **Browser behavior.** Chrome and others hide `www` in the address bar, so users don't see a difference. (source: vercel-deploying-redirecting-domains.md)

Apex-as-primary also works. Vercel uses Anycast IP addresses, so apex domains still get geographically routed traffic at scale. Both are supported. (source: vercel-deploying-redirecting-domains.md, vercel-troubleshooting-domains.md)

## Redirects

Add both `example.com` and `www.example.com`, then configure a redirect from one to the other in **Project Settings → Domains → Edit → Redirect to**. This avoids duplicate content. (source: vercel-deploying-redirecting-domains.md)

Vercel auto-redirects www↔non-www visitors even without explicit config, but explicit redirects are more robust. (source: vercel-deploying-redirecting-domains.md)

## Deployment behavior

Once a domain is added and configured, it automatically points to the latest **production deployment**. Each push to the production branch (commonly `main`) triggers a new deployment to the domain. Reverts take effect immediately. (source: vercel-deploying-redirecting-domains.md)

Domains can also be assigned to specific Git branches for preview/staging environments. (source: vercel-working-with-domains.md)

## SSL certificates

Vercel auto-provisions SSL via Let's Encrypt after DNS verification. Typically provisions within minutes. (source: vercel-custom-domain-setup.md)

- **Non-wildcard domains:** HTTP-01 challenge (automatic, no action needed)
- **Wildcard domains:** DNS-01 challenge (requires Vercel nameservers)

If other CAA records exist on the domain, add: `0 issue "letsencrypt.org"` (source: vercel-troubleshooting-domains.md)

Check with: `dig -t CAA +noall +ans example.com` (source: vercel-troubleshooting-domains.md)

## Email

Vercel does not provide mail service. To receive email on your domain, add MX records pointing to a third-party:

- **ImprovMX** — email forwarding
- **Forward Email** — open-source forwarding
- **Google Workspace** — full email suite

If using Vercel nameservers, add MX records via the Vercel dashboard. **DNS Presets** in the dashboard auto-configure records for common providers. (source: vercel-working-with-domains.md, vercel-managing-dns-records.md)

## Wildcard domains

Wildcard domains (`*.example.com`) route all subdomains to your project. **Must use Vercel nameservers** — Vercel needs DNS control to generate wildcard certificates via DNS-01 challenge. (source: vercel-add-domain.md, vercel-troubleshooting-domains.md)

## IPv6

Vercel does not support IPv6. AAAA records can be created when using Vercel nameservers but Vercel won't serve traffic on them. (source: vercel-working-with-dns.md, vercel-troubleshooting-domains.md)

## Anycast and geographic routing

Vercel's IP address (`76.76.21.21`) uses Anycast — shared across all regions. Users are routed to the closest CDN region via BGP, regardless of where the IP technically resolves. (source: vercel-troubleshooting-domains.md)

## DNS migration from another provider

When transferring an in-use domain to Vercel nameservers:

1. **Before switching:** Lower existing DNS TTL to 60s, wait for propagation (24 hours ideal)
2. **Clone records:** Export zone file from old provider, import with `vercel dns import [domain] [zonefile]`
3. **Verify:** `dig A example.com +short @ns1.vercel-dns.com` — compare against old provider
4. **Switch nameservers** in registrar dashboard

Nameserver changes can take up to 48 hours to propagate. (source: vercel-managing-dns-records.md, vercel-working-with-dns.md)

## Troubleshooting

### Verification commands

```bash
dig ns example.com                    # check nameservers
dig a example.com                     # check A record
dig cname www.example.com             # check CNAME
dig -t CAA +noall +ans example.com    # check CAA records
dig -t TXT _acme-challenge.example.com  # check stale ACME records
```

(source: vercel-troubleshooting-domains.md)

### Common issues

| Issue | Fix |
|-------|-----|
| Invalid Configuration alert | Configure DNS records with registrar or verify TXT ownership |
| SSL not provisioning | Check for missing CAA record or stale `_acme-challenge` TXT record |
| Wildcard not working | Must use Vercel nameservers method |
| Domain used by another account | Add TXT record to verify ownership |
| CNAME syntax error | Include trailing period (.) — it's intentional |
| Name field error | Use prefix only (`www`), not full domain (`www.example.com`) |
| Transfer blocked | ICANN requires 60-day wait between registration and transfer |
| Emoji domain | Convert to punycode (e.g. `jérémie.fr` → `xn--jrmie-bsab.fr`) |

(source: vercel-troubleshooting-domains.md)

### Diagnostic tools

- **whatsmydns.net** — check DNS propagation globally
- **Let's Debug** (letsdebug.net) — diagnose Let's Encrypt certificate issues
- **DNSViz** (dnsviz.net) — DNS behavior analysis and DNSSEC visualization
- **Google Public DNS** (dns.google) — web-based DNS lookup

(source: vercel-working-with-dns.md, vercel-troubleshooting-domains.md)

## Supported DNS record types

When using Vercel nameservers, you can create these record types:

| Type | Purpose |
|------|---------|
| A | Domain → IPv4 address |
| AAAA | Domain → IPv6 address (not served by Vercel) |
| ALIAS | Domain → domain alias (zone apex only) |
| CAA | Certificate authority authorization |
| CNAME | Domain → domain alias (subdomains only) |
| HTTPS | CNAME-like at zone apex, with ALPN info (RFC 9460, limited client support) |
| MX | Mail server |
| NS | Authoritative nameserver |
| SRV | Service location (priority, weight, port, target) |
| TXT | Text (verification, SPF, DKIM) |

Default TTL is 60 seconds. (source: vercel-working-with-dns.md, vercel-managing-dns-records.md)

## Related pages

- [[domain-registration]] — how to register a domain
- [[domain-registrars]] — where to buy (Cloudflare recommended for cost)
- [[dns-records]] — A, CNAME, and other record types
- [[whois-rdap]] — domain ownership lookup, privacy
