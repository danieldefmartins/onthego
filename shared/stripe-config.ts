/**
 * Stripe Configuration for TavvY OnTheGo
 * 
 * Price IDs, Product IDs, and Coupon codes for subscription management
 */

export const STRIPE_CONFIG = {
  // Stripe API Key (set in environment variables)
  secretKey: process.env.STRIPE_SECRET_KEY || '',
  
  // OnTheGo Product
  products: {
    onthego: {
      id: 'prod_TkvJ6rkl8ICp97', // OnTheGo product
      name: 'TavvY OnTheGo',
      prices: {
        monthly: {
          id: 'price_1SswBUIeV9jtGwIXnYP5k1Hl', // $59.99/month
          amount: 5999,
          interval: 'month',
          displayPrice: '$59.99/month',
        },
        annual: {
          id: 'price_1SswCBIeV9jtGwIXNPpnKcXA', // $599/year
          amount: 59900,
          interval: 'year',
          displayPrice: '$599/year',
        },
      },
      coupons: {
        monthly: {
          id: 'HCArOJ6D', // $10 off monthly for 12 months
          name: '$10 Off Per Month',
          discount: 1000,
          duration: '12 months',
          finalPrice: '$49.99/month',
        },
        annual: {
          id: 'eoz9blDN', // $400 off annual
          name: '$400 Off',
          discount: 40000,
          duration: 'once',
          finalPrice: '$199/year',
        },
      },
      features: [
        'Unlimited Go Live broadcasts',
        'Real-time map visibility',
        'Schedule future locations',
        'Digital menu & specials',
        'Analytics dashboard',
        'Customer messaging',
        'Priority support',
        '30-day money-back guarantee',
      ],
    },
  },

  // Success/Cancel URLs
  urls: {
    success: '/subscription/success?session_id={CHECKOUT_SESSION_ID}',
    cancel: '/subscription/cancel',
  },
} as const;

export type StripePlan = 'onthego';
export type StripeBillingInterval = 'monthly' | 'annual';
