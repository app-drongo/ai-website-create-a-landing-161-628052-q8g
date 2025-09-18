'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Database,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Database,
      title: 'SAP S/4HANA Integration',
      description:
        'Seamless integration with SAP S/4HANA Cloud and on-premise systems with real-time data synchronization.',
      badge: 'Core ERP',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 Type II compliant with end-to-end encryption and role-based access controls for SAP environments.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description:
        'Pre-configured SAP integration templates reduce implementation time from months to weeks.',
      badge: 'Speed',
    },
    {
      icon: Globe,
      title: 'Multi-System Connectivity',
      description:
        'Connect SAP ERP with CRM, e-commerce, and third-party applications through unified APIs.',
      badge: 'Integration',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Live SAP data visualization and business intelligence dashboards for informed decision making.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Workflow Engine',
      description:
        'Build automated business processes that span across SAP modules and external systems.',
      badge: 'Automation',
    },
    {
      icon: Users,
      title: 'User Management',
      description:
        'Centralized identity management with SSO integration for all SAP and connected applications.',
      badge: 'Identity',
    },
    {
      icon: Clock,
      title: '24/7 SAP Monitoring',
      description:
        'Proactive system monitoring with automated alerts and performance optimization for SAP landscapes.',
      badge: 'Support',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description:
        'Built-in compliance frameworks for SOX, GDPR, and industry-specific regulations within SAP.',
      badge: 'Compliance',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete SAP ERP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise-grade SAP integration solutions that connect your business systems,
            streamline operations, and unlock the full potential of your ERP investment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to transform your SAP landscape?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule SAP Assessment
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Integration Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
