# DNS Configuration for liferecoverysd.org

## SPF Record Setup

An SPF (Sender Policy Framework) record helps prevent email spoofing and improves email deliverability.

### What is SPF?
SPF allows you to specify which mail servers are authorized to send emails on behalf of your domain. Without it, spammers can easily forge emails appearing to come from your domain.

### How to Add SPF Record

You need to add a TXT record to your DNS settings. The exact steps depend on your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.).

#### Recommended SPF Record

```
v=spf1 include:_spf.gmail.com ~all
```

**Use this if you send emails through:**
- Gmail (liferecoverysv@gmail.com)

#### Alternative SPF Records

**If you use multiple email services:**
```
v=spf1 include:_spf.gmail.com include:spf.protection.outlook.com ~all
```

**Basic SPF (for Gmail only):**
```
v=spf1 include:_spf.google.com ~all
```

### Steps to Add SPF Record

#### 1. Log into your DNS Provider
- Go to your domain registrar or DNS hosting provider
- Navigate to DNS settings or DNS management
- Common providers: GoDaddy, Namecheap, Cloudflare, Google Domains, etc.

#### 2. Add a New TXT Record

**Record Details:**
- **Type:** TXT
- **Host/Name:** @ (or leave blank, or enter your domain)
- **Value/Content:** `v=spf1 include:_spf.gmail.com ~all`
- **TTL:** 3600 (or default)

#### 3. Save Changes
- DNS changes can take 24-48 hours to propagate
- Most providers propagate changes within 1-4 hours

### Verify SPF Record

After adding the record, verify it using these tools:

1. **MXToolbox SPF Checker:**
   https://mxtoolbox.com/spf.aspx

2. **Google Admin Toolbox:**
   https://toolbox.googleapps.com/apps/checkmx/

3. **Command Line (Mac/Linux):**
   ```bash
   dig liferecoverysd.org TXT
   ```

### Understanding SPF Syntax

- `v=spf1` - Version of SPF
- `include:_spf.gmail.com` - Authorize Gmail servers
- `~all` - Soft fail (recommended for testing)
- `-all` - Hard fail (use after testing)

### Notes

- Only one SPF record is allowed per domain
- If you already have an SPF record, modify it instead of creating a new one
- The `~all` (soft fail) is recommended initially; you can change to `-all` (hard fail) once you verify everything works

### Common DNS Provider Links

- **GoDaddy:** https://www.godaddy.com/help/add-an-spf-record-19218
- **Namecheap:** https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/
- **Cloudflare:** https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
- **Google Domains:** https://support.google.com/domains/answer/3290350

## Additional DNS Recommendations

### DMARC Record (Optional but Recommended)

DMARC works with SPF to further protect your domain from email spoofing.

**Add another TXT record:**
- **Host/Name:** _dmarc
- **Value:** `v=DMARC1; p=none; rua=mailto:liferecoverysv@gmail.com`
- **TTL:** 3600

This will send you reports about email authentication status.

### DKIM (Optional)

If you use Gmail/Google Workspace, you can set up DKIM for additional email security:
https://support.google.com/a/answer/174124

## Questions?

If you need help setting up these records, contact your DNS provider's support team or email administrator.
