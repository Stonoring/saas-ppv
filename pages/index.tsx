import * as React from "react";
import {
  Bot,
  FileText,
  Bell,
  User,
  LogOut,
  Settings,
  Building,
  Briefcase,
  UserPlus,
  Info,
  Zap,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function SaasInterface() {
  const [companySize, setCompanySize] = React.useState(11);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <header className="border-b fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-10">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Prime de Partage de la Valeur (PPV)</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            {/* Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild
                    className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                    <Button variant="outline">YT</Button>
                </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 transform transition-transform duration-200 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
                  >
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                      <span>Paramètres</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                      <span>Se déconnecter</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6 space-y-6 mt-16">
        {/* Mes Informations Section */}
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 card-hover">
          <CardHeader>
            <CardTitle>Mes Informations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <Building className="h-10 w-10 text-purple-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Entreprise</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-300">570easi</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <Briefcase className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">SIRET</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-300">123 456 789 00001</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <UserPlus className="h-10 w-10 text-green-500" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Effectif</h3>
                  <p className="text-sm text-green-600 dark:text-green-300">{companySize} employés</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rappels légaux et Avantages fiscaux */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                <Info className="h-5 w-5 mr-2 text-blue-500" />
                Rappels légaux importants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Seuils :</strong> 11 à 49 salariés</li>
                <li><strong>Conditions :</strong> Bénéfice positif</li>
                <li><strong>Plafonds :</strong> 3000€ / 6000€ (avec intéressement)</li>
                <li><strong>Échéance :</strong> Obligatoire dès 01/2025</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Avantages fiscaux
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Exonération de forfait social</li>
                <li>Déduction fiscale des sommes versées</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Suivi des démarches */}
        <Card>
          <CardHeader>
            <CardTitle>Suivi des démarches PPV</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Mise en place PPV
                </span>
                <Badge variant="outline">Échéance : 01/01/2025</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Déclaration PPV
                </span>
                <Badge variant="secondary">Complété</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-yellow-500" />
                  Dépôt accord PPV
                </span>
                <Badge>En cours</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
