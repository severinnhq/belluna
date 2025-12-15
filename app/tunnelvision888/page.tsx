"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Lead {
  id: string;
  marketing_type: string[];
  voucher: string;
  monthly_spend: string;
  whodecide: string;
  website: string;
  location: string;
  whenstart: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  accepted_privacy: boolean;
  created_at: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else if (data) {
        setLeads(data as Lead[]);
      }
      setLoading(false);
    };

    fetchLeads();
  }, []);

  if (loading) return <p className="p-8 text-white">Loading leads...</p>;
  if (leads.length === 0)
    return <p className="p-8 text-white">No leads submitted yet.</p>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Leads Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-2">{lead.full_name}</h2>
            <p className="text-sm mb-1">
              <strong>Email:</strong> {lead.email}
            </p>
            <p className="text-sm mb-1">
              <strong>Phone:</strong> {lead.phone}
            </p>
            <p className="text-sm mb-1">
              <strong>Position:</strong> {lead.position || "-"}
            </p>
            <p className="text-sm mb-1">
              <strong>Marketing:</strong>{" "}
              {lead.marketing_type.length ? lead.marketing_type.join(", ") : "-"}
            </p>
            <p className="text-sm mb-1">
              <strong>Voucher:</strong> {lead.voucher || "-"}
            </p>
            <p className="text-sm mb-1">
              <strong>Monthly Spend:</strong> {lead.monthly_spend || "-"}
            </p>
            <p className="text-sm mb-1">
              <strong>Decision Maker:</strong> {lead.whodecide || "-"}
            </p>
            <p className="text-sm mb-1">
              <strong>Website:</strong>{" "}
              {lead.website ? (
                <a
                  href={lead.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline"
                >
                  {lead.website}
                </a>
              ) : (
                "-"
              )}
            </p>
            <p className="text-sm mb-1">
              <strong>Location:</strong> {lead.location || "-"}
            </p>
            <p className="text-sm mb-2">
              <strong>When Start:</strong> {lead.whenstart || "-"}
            </p>
            <p className="text-xs text-gray-400">
              Submitted: {new Date(lead.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
