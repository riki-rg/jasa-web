"use client";

import { useSession } from "@/lib/auth/client";
import { signOut } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, LogOut, Users, FileText, Settings, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Selamat datang, {session.user.name || session.user.email}</p>
          </div>
          <Button variant="outline" onClick={() => signOut()} className="gap-2">
            <LogOut className="h-4 w-4" />
            Keluar
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Konsultasi</CardTitle>
              <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 dari bulan lalu</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Project Aktif</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 selesai, 1 development</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendapatan Bulan Ini</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 45 Juta</div>
              <p className="text-xs text-muted-foreground">+15% dari bulan lalu</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating Client</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9/5.0</div>
              <p className="text-xs text-muted-foreground">Berdasarkan 24 review</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Konsultasi Terbaru</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/consultation">
                    <Plus className="h-4 w-4 mr-1" />
                    Baru
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Budi Santoso", project: "E-Commerce Fashion", status: "IN_PROGRESS", date: "2024-01-15" },
                  { name: "Siti Rahayu", project: "SaaS HR Management", status: "PENDING", date: "2024-01-14" },
                  { name: "Ahmad Wijaya", project: "Portfolio Personal", status: "COMPLETED", date: "2024-01-10" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-sm text-muted-foreground">{c.project}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        c.status === "COMPLETED" ? "bg-green-100 text-green-800" :
                        c.status === "IN_PROGRESS" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {c.status.replace("_", " ")}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-20 flex-col gap-2">
                  <Link href="/consultation">
                    <Plus className="h-6 w-6" />
                    <span>Konsultasi Baru</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-20 flex-col gap-2">
                  <Link href="/dashboard/projects">
                    <FileText className="h-6 w-6" />
                    <span>Kelola Project</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-20 flex-col gap-2">
                  <Link href="/dashboard/portfolio">
                    <LayoutDashboard className="h-6 w-6" />
                    <span>Portfolio</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-20 flex-col gap-2">
                  <Link href="/dashboard/settings">
                    <Settings className="h-6 w-6" />
                    <span>Pengaturan</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}