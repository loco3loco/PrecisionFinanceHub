import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

// Carga perezosa de las páginas de servicios para mejorar el rendimiento
const ContabilidadCorporativa = lazy(() => import("@/pages/servicios/contabilidad-corporativa"));
const AsesoriaFiscal = lazy(() => import("@/pages/servicios/asesoria-fiscal"));
const ConsultoriaEmpresarial = lazy(() => import("@/pages/servicios/consultoria-empresarial"));
const AuditoriaFinanciera = lazy(() => import("@/pages/servicios/auditoria-financiera"));
const GestionNomina = lazy(() => import("@/pages/servicios/gestion-nomina"));
const TecnologiaContable = lazy(() => import("@/pages/servicios/tecnologia-contable"));

// Componente de carga
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/servicios/contabilidad-corporativa" component={ContabilidadCorporativa} />
          <Route path="/servicios/asesoria-fiscal" component={AsesoriaFiscal} />
          <Route path="/servicios/consultoria-empresarial" component={ConsultoriaEmpresarial} />
          <Route path="/servicios/auditoria-financiera" component={AuditoriaFinanciera} />
          <Route path="/servicios/gestion-nomina" component={GestionNomina} />
          <Route path="/servicios/tecnologia-contable" component={TecnologiaContable} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Toaster />
    </>
  );
}
