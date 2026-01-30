# OnTheGo Railway Environment Variables

## Required for Build (VITE_* variables - must be set before deployment)

### Supabase (Client-side)
- `VITE_SUPABASE_URL` - Supabase project URL (e.g., https://xxxxx.supabase.co)
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous/public key

### OAuth
- `VITE_OAUTH_PORTAL_URL` - OAuth portal URL (e.g., https://manus.im/login)
- `VITE_APP_ID` - Application ID for OAuth (e.g., "onthego")

## Required for Runtime (Server-side)

### Database
- `DATABASE_URL` - PostgreSQL connection string for Drizzle ORM
- `SUPABASE_DATABASE_URL` - Alternative Supabase database URL (if using Supabase Postgres)

### Supabase (Server-side)
- `SUPABASE_URL` - Supabase project URL (same as VITE_SUPABASE_URL)
- `SUPABASE_ANON_KEY` - Supabase anonymous key (same as VITE_SUPABASE_ANON_KEY)
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (admin access)

### Stripe
- `STRIPE_SECRET_KEY` - Stripe secret key for payment processing
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key (optional, if needed server-side)
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

### Server Configuration
- `NODE_ENV` - Set to "production"
- `PORT` - Port number (default: 3000, Railway sets this automatically)
- `PUBLIC_URL` - Public URL of the app (e.g., https://onthego.tavvy.com)
- `CORS_ALLOWED_ORIGINS` - Comma-separated list of allowed CORS origins (e.g., https://onthego.tavvy.com,https://trytavvy.com)

### OAuth Server (if using custom OAuth)
- `OAUTH_SERVER_URL` - OAuth server URL (if different from VITE_OAUTH_PORTAL_URL)

## Optional Variables

### GHL Integration (if used)
- `GHL_API_KEY` - GoHighLevel API key
- `GHL_LOCATION_ID` - GoHighLevel location ID

## Notes

1. **VITE_* variables** are embedded into the JavaScript bundle during build time. Changing them requires a new deployment.
2. **Runtime variables** (process.env.*) can be changed and take effect on container restart.
3. Copy values from the working pros portal for Supabase and Stripe credentials.
4. Make sure CORS_ALLOWED_ORIGINS includes the onthego domain.
