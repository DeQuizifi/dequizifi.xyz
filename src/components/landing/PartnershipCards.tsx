import React from "react";
import { Card } from "@/components/ui/card";
import { Partnership } from "@/lib/data";

export function PartnershipCard({ partner }: { partner: Partnership }) {
  return (
    <Card className="group relative p-6 text-center hover:shadow-card-hover transition-all duration-300 border-0 glass-effect">
      <div className="text-3xl mb-3 text-muted-foreground">🔲</div>
      <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
      <p className="text-xs text-muted-foreground">
        Category: {partner.category}
      </p>
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </Card>
  );
}

export default function PartnershipCards({
  partners,
}: {
  partners: Partnership[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {partners.length === 0 ? (
        <div className="col-span-full text-center text-sm text-muted-foreground">
          No partners in this category yet.
        </div>
      ) : (
        partners.map((p) => <PartnershipCard key={p.name} partner={p} />)
      )}
    </div>
  );
}
