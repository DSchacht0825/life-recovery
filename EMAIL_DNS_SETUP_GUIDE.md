# Email & DNS Security Setup Guide

## Overview
This guide will help you set up SPF and DMARC records to improve email deliverability and prevent email spoofing for liferecoverysd.org.

## What are SPF and DMARC?

### SPF (Sender Policy Framework)
SPF helps prevent email spoofing by specifying which mail servers are authorized to send email on behalf of your domain.

### DMARC (Domain-based Message Authentication, Reporting & Conformance)
DMARC builds on SPF and DKIM to provide a way for domain owners to protect their domain from unauthorized use (email spoofing).

## Current Status
❌ **SPF Record**: Not configured
❌ **DMARC Record**: Not configured

## How to Add DNS Records

You'll need to add these records through your domain registrar or DNS provider. Based on your setup, this is likely through:
- Netlify DNS
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare

## Step-by-Step Instructions

### Step 1: Add SPF Record

1. Log into your DNS provider
2. Navigate to DNS settings for `liferecoverysd.org`
3. Add a new TXT record with these details:

```
Type: TXT
Name: @ (or leave blank for root domain)
Value: v=spf1 include:_spf.google.com include:spf.protection.outlook.com ~all
TTL: 3600 (or default)
```

**Explanation:**
- `v=spf1` - SPF version 1
- `include:_spf.google.com` - Allow Gmail/Google Workspace to send email
- `include:spf.protection.outlook.com` - Allow Microsoft 365/Outlook to send email
- `~all` - Soft fail for all other servers (will mark as spam but not reject)

**If you only use Gmail:**
```
v=spf1 include:_spf.google.com ~all
```

**If you also use Formspree (contact form):**
```
v=spf1 include:_spf.google.com include:_spf.formspree.io ~all
```

### Step 2: Add DMARC Record

1. Still in your DNS settings
2. Add a new TXT record:

```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@liferecoverysd.org; ruf=mailto:dmarc-failures@liferecoverysd.org; fo=1
TTL: 3600 (or default)
```

**Explanation:**
- `v=DMARC1` - DMARC version 1
- `p=quarantine` - Put suspicious emails in spam (recommended for start)
- `pct=100` - Apply policy to 100% of emails
- `rua=mailto:email` - Aggregate reports sent here
- `ruf=mailto:email` - Forensic reports sent here
- `fo=1` - Generate forensic reports if any check fails

**Beginner Version (Start Here):**
```
v=DMARC1; p=none; rua=mailto:liferecoverysv@gmail.com
```

After 30 days, upgrade to:
```
v=DMARC1; p=quarantine; rua=mailto:liferecoverysv@gmail.com
```

After another 30 days, upgrade to (most strict):
```
v=DMARC1; p=reject; rua=mailto:liferecoverysv@gmail.com
```

## Verification

### Test SPF Record
1. Wait 1-4 hours for DNS propagation
2. Visit: https://mxtoolbox.com/spf.aspx
3. Enter: `liferecoverysd.org`
4. Click "SPF Record Lookup"
5. Should show green checkmark

### Test DMARC Record
1. Wait 1-4 hours for DNS propagation
2. Visit: https://mxtoolbox.com/dmarc.aspx
3. Enter: `liferecoverysd.org`
4. Click "DMARC Lookup"
5. Should show your DMARC policy

### Send Test Email
1. Send an email from liferecoverysv@gmail.com to yourself
2. View email headers (in Gmail: Show original)
3. Look for:
   - `spf=pass`
   - `dmarc=pass`

## Netlify DNS Specific Instructions

If you're using Netlify DNS:

1. Go to https://app.netlify.com
2. Click on your site
3. Go to "Domain settings"
4. Scroll to "DNS records"
5. Click "Add new record"

**For SPF:**
- Record type: TXT
- Name: @ (or liferecoverysd.org)
- Value: `v=spf1 include:_spf.google.com ~all`
- TTL: 3600

**For DMARC:**
- Record type: TXT
- Name: _dmarc
- Value: `v=DMARC1; p=none; rua=mailto:liferecoverysv@gmail.com`
- TTL: 3600

## Additional Email Best Practices

### 1. Use Professional Email Address
Consider setting up `info@liferecoverysd.org` or `contact@liferecoverysd.org` instead of Gmail for professional appearance.

**Options:**
- Google Workspace ($6/user/month)
- Microsoft 365 ($6/user/month)
- Zoho Mail (Free for 1 user, $1/user/month for more)
- ProtonMail (Free tier available)

### 2. Email Signature
Create a professional email signature with:
```
---
Life Recovery San Diego
Casa de Oro Bible Church
10195 Madrid Way, Spring Valley, CA 91977
Phone: (619) 414-6985
Website: https://liferecoverysd.org
Meetings: Every Friday at 6:00 PM

"Hope. Healing. Restoration through Christ."
```

### 3. Email Security Tips
- Enable 2-factor authentication on Gmail
- Use strong, unique passwords
- Don't click suspicious links
- Verify sender before responding to donation requests
- Never share account passwords

## Benefits of Proper Email Setup

✅ **Improved Deliverability** - Emails less likely to go to spam
✅ **Brand Protection** - Prevents others from sending fake emails from your domain
✅ **Trust & Credibility** - Shows professionalism and security awareness
✅ **Compliance** - Meets modern email authentication standards
✅ **Reporting** - Get notified if someone tries to spoof your domain

## Monitoring & Maintenance

### Weekly
- Check spam folder for legitimate emails being filtered

### Monthly
- Review DMARC reports (if you set up rua email)
- Check email deliverability metrics

### Quarterly
- Test email delivery to major providers (Gmail, Outlook, Yahoo)
- Review and update SPF record if using new email services

### Annually
- Review and tighten DMARC policy (none → quarantine → reject)
- Audit email security settings

## Troubleshooting

### Problem: SPF record not showing up
**Solution**:
- Wait 24 hours for full DNS propagation
- Check for typos in TXT record
- Ensure only ONE SPF record exists (combine if multiple)

### Problem: Emails going to spam
**Solution**:
- Verify SPF passes: Check email headers
- Check DMARC alignment
- Improve email content (avoid spam trigger words)
- Maintain consistent sending patterns
- Ensure proper unsubscribe links

### Problem: Too many SPF lookups
**Solution**:
- SPF has 10 DNS lookup limit
- Flatten includes or use SPF flattening services
- Remove unnecessary includes

## Resources

- SPF Record Testing: https://mxtoolbox.com/spf.aspx
- DMARC Testing: https://mxtoolbox.com/dmarc.aspx
- Email Header Analyzer: https://mxtoolbox.com/EmailHeaders.aspx
- DMARC Report Analyzer: https://dmarcian.com/
- Google Postmaster Tools: https://postmaster.google.com/

## Need Help?

If you need assistance setting this up:

1. Contact your current email provider (Gmail support)
2. Contact your DNS/domain provider's support
3. Hire a technical consultant specializing in email deliverability
4. Post in web development forums with specific error messages

---

**Document Created**: October 16, 2025
**Next Review**: January 16, 2026
**Priority**: Medium (improves deliverability and security)
