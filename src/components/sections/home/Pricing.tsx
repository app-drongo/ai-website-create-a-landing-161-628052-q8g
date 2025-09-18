'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  const handleContactSales = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'SAP Assessment',
      description: 'Comprehensive analysis of your current SAP environment',
      price: '$2,500',
      period: 'one-time',
      badge: null,
      features: [
        'Current system audit',
        'Performance analysis',
        'Integration roadmap',
        'Risk assessment',
        'Detailed recommendations report',
      ],
      cta: 'Start Assessment',
      popular: false,
    },
    {
      name: 'SAP Integration Suite',
      description: 'Complete SAP ERP integration and optimization',
      price: '$15,000',
      period: '/project',
      badge: 'Most Popular',
      features: [
        'Full SAP ERP integration',
        'Custom module development',
        'Data migration services',
        'User training program',
        '6 months support included',
        'Performance optimization',
        'Third-party system connections',
        'Go-live support',
      ],
      cta: 'Begin Integration',
      popular: true,
    },
    {
      name: 'Enterprise SAP Solutions',
      description: 'Large-scale SAP implementations with ongoing support',
      price: 'Custom',
      period: '',
      badge: 'Enterprise',
      features: [
        'Multi-module SAP implementation',
        'Unlimited integrations',
        '24/7 dedicated support',
        'Custom workflow automation',
        'Advanced security protocols',
        'SLA guarantee 99.9% uptime',
        'Dedicated project manager',
        'Ongoing system optimization',
      ],
      cta: 'Discuss Requirements',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transparent SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fixed-price SAP integration services with no hidden costs. From assessment to full
            implementation, we deliver results on time and on budget.
          </p>

          {/* Service Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Implementation
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Support Plans
              <Badge variant="secondary" className="ml-2 text-xs">
                From $500/mo
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={
                    plan.name === 'Enterprise SAP Solutions'
                      ? handleContactSales
                      : handlePrimaryAction
                  }
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'SAP Integration Suite' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free consultation included • ROI guarantee
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom SAP solution?</h3>
          <p className="text-muted-foreground mb-6">
            Every SAP environment is unique. We offer tailored integration solutions for complex
            enterprise requirements with multi-system architectures.
          </p>
          <Button variant="outline" size="lg" onClick={handleScheduleDemo}>
            Schedule SAP Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
