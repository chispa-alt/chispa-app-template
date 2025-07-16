import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";

export default function ChispaHome() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">🔥 Chispa</h1>
        <p className="text-center text-lg mb-6">
          Subí tus fotos. Compartí tu link. Recibí apoyo. Ganá plata mostrando lo que te gusta.
        </p>

        {/* Registro rápido */}
        <Card className="mb-8">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Registrate</h2>
            <Input placeholder="Nombre de usuario" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Contraseña" />
            <Textarea placeholder="Contanos algo sobre vos..." />
            <Button className="w-full">Crear cuenta</Button>
          </CardContent>
        </Card>

        {/* Ejemplo de perfil público */}
        <Card>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16" />
              <div>
                <h3 className="text-xl font-bold">@sofia_luz</h3>
                <p>Amante de la fotografía y los mates 🌿</p>
              </div>
            </div>
            <img
              src="https://source.unsplash.com/random/400x300?woman"
              alt="foto"
              className="rounded-2xl shadow-md"
            />
            <Button 
              className="w-full text-lg"
              onClick={() => window.open("http://link.mercadopago.com.ar/apoyochispa", "_blank")}
            >
              💖 Apoyar con una Chispa
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
