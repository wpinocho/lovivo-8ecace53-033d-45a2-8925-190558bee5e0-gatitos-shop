import { Heart, Users, Award, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutUs = () => {
  console.log("AboutUs page rendered");

  const teamMembers = [
    {
      name: "María González",
      role: "Fundadora y Veterinaria",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Con más de 10 años de experiencia en cuidado felino, María fundó Gatitos Felices para conectar familias con sus compañeros perfectos."
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Comportamiento",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Carlos se especializa en evaluar la personalidad de cada gatito para asegurar la mejor compatibilidad con las familias adoptivas."
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora de Adopciones",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Ana se encarga de todo el proceso de adopción, asegurándose de que cada gatito encuentre el hogar perfecto."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Amor y Cuidado",
      description: "Cada gatito recibe amor incondicional y cuidados veterinarios completos antes de encontrar su hogar."
    },
    {
      icon: Users,
      title: "Familias Felices",
      description: "Nos dedicamos a crear conexiones duraderas entre familias y sus nuevos compañeros felinos."
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Todos nuestros gatitos están vacunados, desparasitados y con certificado de salud."
    },
    {
      icon: Shield,
      title: "Compromiso de Vida",
      description: "Ofrecemos apoyo continuo y garantía de reubicación si las circunstancias cambian."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En Gatitos Felices, nuestra misión es conectar corazones y crear familias. 
              Desde 2015, hemos ayudado a más de 2,000 gatitos a encontrar hogares llenos de amor.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Todo comenzó cuando María González, una veterinaria apasionada por los felinos, 
                  se dio cuenta de la gran cantidad de gatitos que necesitaban hogares amorosos. 
                  En 2015, decidió crear Gatitos Felices para hacer la diferencia.
                </p>
                <p>
                  Lo que empezó como un pequeño refugio en su hogar, se ha convertido en una 
                  organización reconocida que trabaja con criadores éticos y refugios locales 
                  para asegurar que cada gatito reciba el mejor cuidado posible.
                </p>
                <p>
                  Hoy, nuestro equipo de especialistas evalúa cuidadosamente cada gatito, 
                  no solo su salud física, sino también su personalidad, para garantizar 
                  la mejor compatibilidad con su futura familia.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop"
                alt="Gatitos jugando"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm">Adopciones Exitosas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos principios guían todo lo que hacemos en Gatitos Felices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible cada adopción exitosa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-pink-500 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-pink-100">Adopciones Exitosas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-pink-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-pink-100">Razas Disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-pink-100">Familias Satisfechas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para encontrar tu compañero perfecto?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo de gatitos adorables y encuentra el que robará tu corazón
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
          >
            <Heart className="mr-2 h-5 w-5" />
            Ver Gatitos Disponibles
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;