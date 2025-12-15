"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setLeads(data || []));
  }, []);

  if (!leads.length) return <p>No leads yet.</p>;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(leads[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {leads.map((lead, i) => (
          <tr key={i}>
            {Object.values(lead).map((val, j) => (
              <td key={j}>
                {Array.isArray(val) ? val.join(", ") : String(val)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
