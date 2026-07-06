# WHOIS and RDAP

## WHOIS (legacy)

WHOIS was the internet's public directory for domain registration data for decades. It ran as a query-and-response protocol over an unencrypted TCP connection on port 43. Anyone could query it and receive a plain-text response containing owner names, contact details, registration dates, and nameserver information. (source: dynadot-whois-vs-rdap.md)

### WHOIS limitations

- **No encryption** — queries and responses traveled in plain text, visible to anyone on the network path.
- **No standardization** — every registrar returned results in a different format, making automated processing unreliable.
- **No access control** — all-or-nothing model; no way to show different data to different requesters.
- **GDPR incompatibility** — the open model conflicted with European data protection regulations.

(source: dynadot-whois-vs-rdap.md)

## RDAP (current)

RDAP (Registration Data Access Protocol) replaced WHOIS. ICANN officially sunsetted WHOIS for gTLDs on January 28, 2025. Registries and registrars for generic TLDs (`.com`, `.net`, `.org`, etc.) are no longer contractually required to maintain WHOIS services. (source: dynadot-whois-vs-rdap.md)

### Technical improvements over WHOIS

| Feature | WHOIS | RDAP |
|---------|-------|------|
| Transport | Unencrypted TCP (port 43) | HTTPS |
| Data format | Unstructured plain text | Standardized JSON |
| Access control | All-or-nothing | Tiered (public / authenticated / law enforcement) |
| Consistency | Per-registrar formatting | Consistent field names across all registrars |

(source: dynadot-whois-vs-rdap.md)

### Tiered access

- **General public** — sees a limited set of publicly available data (domain status, nameservers, creation/expiry dates).
- **Authenticated users** (IP bodies, law enforcement) — may receive more complete details when permitted.

(source: dynadot-whois-vs-rdap.md)

## Privacy protection

Registrant contact information has been redacted in public queries since 2018 due to GDPR compliance — this predates RDAP. The data exists in registry records but is not accessible through standard public queries. (source: dynadot-whois-vs-rdap.md)

To obtain registrant contact information, formal requests must go through ICANN's Registration Data Request Service (RDRS). (source: dynadot-whois-vs-rdap.md)

In 2026, free WHOIS/RDAP privacy (registrar-side redaction of your contact info) is standard at all major registrars. If a registrar charges for it, that cost is part of their real price. (source: instant-domain-search-best-registrars-2026.md)

## Country-code TLDs

WHOIS persists for country-code TLDs (like `.de`). The RDAP transition applied only to gTLDs. If a domain portfolio includes ccTLDs, lookup workflows for those have not changed. (source: dynadot-whois-vs-rdap.md)

## Related pages

- [[domain-registration]] — how domain registration works
- [[domain-registrars]] — registrar comparison (all include free privacy)
