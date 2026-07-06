# Domain Registration

A domain name is the human-readable address visitors type into a browser (e.g. `example.com`). It replaces the numerical IP address (e.g. `192.0.2.1`) that identifies where a website is hosted. (source: name-com-how-to-register-domain.md)

## Structure of a domain name

Every domain has three parts:

1. **Subdomain** — `www.` or `blog.` (optional prefix)
2. **Second-level domain (SLD)** — the brand or chosen word
3. **Top-level domain (TLD)** — the extension (`.com`, `.org`, `.io`)

The Domain Name System (DNS) translates the readable address into the numerical IP address so browsers can locate the server. (source: dynadot-registering-first-domain.md)

## Top-level domains (TLDs)

TLDs fall into three categories:

- **Generic TLDs (gTLDs):** `.com`, `.net`, `.org` — traditional, widely recognized
- **Country-code TLDs (ccTLDs):** `.us`, `.uk`, `.ca` — location-specific
- **New TLDs (nTLDs):** `.app`, `.dev`, `.ai`, `.xyz`, `.io` — modern, industry-specific

The right TLD depends on audience and purpose. Traditional extensions offer familiarity but limited availability; newer ones like `.ai` or `.dev` signal industry focus. (source: name-com-how-to-register-domain.md)

## The ICANN/registry/registrar chain

Domain registration operates through a three-tier system:

1. **ICANN** — the Internet Corporation for Assigned Names and Numbers. Sets global domain policy. Does not register domains directly.
2. **Registries** — operate specific TLDs. VeriSign runs `.com`, Google Registry runs `.dev`, Identity Digital runs hundreds of others. Maintain the authoritative database and publish zone files. (source: instant-domain-search-best-registrars-2026.md)
3. **Registrars** — ICANN-accredited companies that sell domain registrations to the public. Over 2,000 exist worldwide. Examples: Cloudflare, Porkbun, Namecheap, GoDaddy. (source: dynadot-registering-first-domain.md)

You interact with registrars. Registrars have agreements with registries and ICANN to offer registration services.

## Registration is a lease, not a purchase

Domains are not permanently owned. They require periodic renewal. Most register for 1 year, though terms up to 10 years are available. Failing to renew results in losing ownership — expired domains are targets for squatters. (source: dynadot-registering-first-domain.md)

Enable auto-renewal immediately after registration. (source: name-com-how-to-register-domain.md)

## Registration process

1. **Choose a domain name** — short, memorable, easy to spell, no hyphens or numbers. Under 15 characters is ideal. (source: name-com-how-to-register-domain.md)
2. **Check availability** — use a registrar's search tool. If taken, try different TLDs or modifications.
3. **Select a registrar** — evaluate pricing (registration AND renewal), DNS management quality, transfer policy, security features. See [[domain-registrars]].
4. **Select registration term** — 1–10 years. Longer terms cost more upfront but secure ownership.
5. **Review add-ons** — privacy protection (usually free in 2026), SSL, email forwarding.
6. **Complete checkout** — create account, provide payment, finalize.
7. **Verify email** — registrars must verify contact information per ICANN rules.

## Pricing

| TLD type | Typical annual cost |
|----------|-------------------|
| Standard `.com` | $10–$20 |
| `.net`, `.org` | $10–$20 |
| `.dev`, `.ai` | $60–$100 |
| Premium/aftermarket | Varies widely |

(source: name-com-how-to-register-domain.md)

The wholesale price for `.com` is $10.26 (VeriSign) + $0.20 (ICANN fee) = $10.46. At-cost registrars like Cloudflare pass this through with no markup. Others add margin, especially on renewals. (source: instant-domain-search-best-registrars-2026.md)

### The renewal price trap

The most common pricing mistake. Many registrars offer low first-year promos ($1.99) that renew at $21.99+. Over 10 years, a $12/yr renewal beats a $22/yr renewal by $100 per domain. Always check renewal pricing before registering. (source: instant-domain-search-best-registrars-2026.md)

Flat-priced registrars (Cloudflare, Porkbun, NameSilo, Spaceship, Dynadot) charge the same for registration and renewal. (source: instant-domain-search-best-registrars-2026.md)

## After registration

1. **Connect domain to hosting** — configure [[dns-records]] to point to your web server or platform (see [[vercel-custom-domains]] for Vercel).
2. **Set up email** (optional) — `you@yourdomain.com` via Google Workspace, Titan, or registrar email.
3. **Enable auto-renewal** — prevents expiration and domain hijacking.
4. **Enable 2FA** — protects against unauthorized account access.
5. **Enable registrar lock** — prevents unauthorized domain transfers.

(source: name-com-how-to-register-domain.md, dynadot-registering-first-domain.md)

## Common mistakes

- Using unaccredited or unreliable registrars
- Not checking trademark databases before registering (U.S. trademark database or equivalent)
- Only looking at first-year price, ignoring renewal cost
- Skipping security (2FA, registrar lock, [[whois-rdap]] privacy)
- Taking "free domain" offers without checking renewal rates and transfer restrictions

(source: name-com-how-to-register-domain.md)

## Naming tips

- Keep it short — closer to 6–7 characters is optimal
- No hyphens or numbers — hard to communicate verbally
- Prioritize brandability over exact-match keywords
- Consider registering variations (`.com`, `.ai`, `.co`) for brand protection
- Check trademark databases before committing

(source: name-com-how-to-register-domain.md, dynadot-registering-first-domain.md)

## Related pages

- [[domain-registrars]] — registrar comparison with pricing
- [[dns-records]] — A, AAAA, CNAME records
- [[whois-rdap]] — domain ownership lookup, privacy
- [[vercel-custom-domains]] — connecting a domain to Vercel
