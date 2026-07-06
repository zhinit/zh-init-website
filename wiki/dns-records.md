# DNS Records

DNS (Domain Name System) records are stored on authoritative name servers and translate human-readable domain names into machine-readable addresses. When you register a domain (see [[domain-registration]]), you configure DNS records to point it at your hosting provider.

## How DNS resolution works

When a browser requests a website, it performs a DNS query. The recursive resolver checks its cache, then queries the root DNS nameserver → TLD nameserver → authoritative nameserver for the domain's records. (source: vercel-working-with-dns.md)

## Record types

### A record

Points a domain name at an IPv4 address. The most fundamental DNS record.

```
example.com → A → 76.76.21.21
```

A records work for both apex domains (`example.com`) and subdomains (`blog.example.com`). (source: vercel-custom-domain-setup.md)

### AAAA record

Same purpose as A, but for IPv6 addresses. Modern systems often use both (dual-stack). **Vercel does not support IPv6** — AAAA records can be created but Vercel won't serve traffic on them. (source: vercel-working-with-dns.md)

### CNAME record

Canonical Name record. Points a domain name to another domain name (an alias), not directly to an IP address. DNS follows the alias chain to resolve the final IP.

```
www.example.com → CNAME → cname.vercel-dns-0.com
```

**Apex domain restriction:** CNAME records only work for subdomains. You cannot use a CNAME for an apex domain (`example.com`). RFC 1034 §3.6.2: "If a CNAME RR is present at a node, no other data should be present." Since apex domains require NS records and usually MX records, a CNAME would violate this rule. (source: vercel-troubleshooting-domains.md, vercel-deploying-redirecting-domains.md)

**Why CNAME is preferred over A:** CNAME avoids hard-coding an IP address. If the host provider needs to change IPs (DDoS mitigation, performance optimization), CNAMEs follow automatically. A records require manual updates. This is why Vercel recommends `www` (CNAME) as the primary domain over apex (A record). (source: vercel-deploying-redirecting-domains.md)

### ALIAS record

Maps a domain name to another domain name, similar to CNAME, but can be used at the zone apex. The target must return A or AAAA records. Not universally supported by all DNS providers. (source: vercel-working-with-dns.md)

### HTTPS record

CNAME-like functionality usable at the zone apex. Designed for HTTP protocol — includes additional info about the target server (supported ALPN protocols like HTTP/2, HTTP/3). Fairly new (RFC 9460), not all clients support it. (source: vercel-working-with-dns.md)

### CAA record

Certificate Authority Authorization. Specifies which CAs are allowed to issue certificates for the domain. Vercel automatically adds a CAA record for Let's Encrypt at the zone apex. If other CAA records exist, add: `0 issue "letsencrypt.org"`. (source: vercel-working-with-dns.md, vercel-troubleshooting-domains.md)

### MX record

Mail exchange. Points to the mail server for the domain. Required to receive email on a domain. Priority value determines preference order. (source: vercel-working-with-dns.md)

### NS record

Nameserver. Delegates a domain to specific authoritative name servers. (source: vercel-working-with-dns.md)

### TXT record

Arbitrary text. Used for domain verification, SPF (email sender authentication), DKIM (email signing), and other machine-readable metadata. (source: vercel-working-with-dns.md)

### SRV record

Service location. Contains priority, weight, port, and target. Used to specify where specific services (like SIP, XMPP) are hosted. (source: vercel-working-with-dns.md)

## Connecting a domain to Vercel

See [[vercel-custom-domains]] for the full walkthrough. The key records:

| Domain type | Record | Value |
|------------|--------|-------|
| Apex (`example.com`) | A | `76.76.21.21` |
| Subdomain (`www.example.com`) | CNAME | project-specific (check `vercel domains inspect`) |

(source: vercel-custom-domain-setup.md, vercel-add-domain.md)

## TTL (Time to Live)

TTL is the duration (in seconds) that a DNS cache stores a record before requesting a fresh copy from the authoritative server.

| TTL value | Trade-off |
|-----------|-----------|
| Short (30–60s) | Changes propagate fast, but slower page loads (more DNS lookups) |
| Long (86400s / 24h) | Fast page loads (cached), but changes take longer to propagate |
| Vercel default | 60s |

(source: vercel-working-with-dns.md)

**Best practice for migrations:** 24 hours before switching DNS, lower TTL to 60s. After propagation, change the records. The short TTL ensures quick rollback if something goes wrong. (source: vercel-working-with-dns.md)

## DNS propagation

After changing DNS records, propagation can take from a few minutes to 24–48 hours depending on TTL. Standard record changes (A, CNAME, TXT) propagate faster than nameserver changes. (source: vercel-troubleshooting-domains.md)

Tools to check propagation:
- **whatsmydns.net** — global propagation checker
- `dig` command — `dig A example.com +short`
- **Google Public DNS** (dns.google) — web-based lookup

(source: vercel-working-with-dns.md, vercel-troubleshooting-domains.md)

## Nameserver options

Two approaches for managing DNS:

1. **Registrar nameservers** — manage DNS at your registrar (e.g., Cloudflare). Add records pointing to your hosting provider manually. Vercel calls this "external DNS provider."
2. **Hosting provider nameservers** — delegate DNS to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Records auto-created for apex and first-level subdomains. Required for wildcard domains.

If using an external DNS provider with Vercel, you cannot use `vercel dns add` commands. Add records through the external provider's interface. (source: vercel-custom-domain-setup.md, vercel-working-with-nameservers.md)

## Verification commands

```bash
dig ns example.com              # nameservers
dig a example.com               # A record
dig cname www.example.com       # CNAME record
dig mx example.com              # MX records
dig -t CAA +noall +ans example.com  # CAA records
```

(source: vercel-troubleshooting-domains.md)

## Related pages

- [[domain-registration]] — what domains are, how to register
- [[vercel-custom-domains]] — Vercel-specific domain setup, redirects, SSL, troubleshooting
- [[domain-registrars]] — registrar comparison
