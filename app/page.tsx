"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as Icons from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function Home() {
  const [activeSection, setActiveSection] = useState('accueil');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Section Accueil */}
        <section id="accueil" className={`py-20 ${activeSection === 'accueil' ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="block">Bonjour, je suis</span>
                <span className="text-sky-500 block">FETRARISON</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Développeur Full Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
               Âgé de 22 ans, je suis actuellement étudiant en Licence à la Haute École d'Informatique.
               Passionné par les technologies du numérique, je me forme activement dans le domaine du développement web, 
               avec pour objectif de mettre mes compétences au service de projets innovants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-sky-500 hover:bg-sky-600"
                  onClick={() => setActiveSection('contact')}
                >
                  Me contacter
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveSection('projets')}
                >
                  Voir mes projets
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-sky-200 dark:bg-sky-900 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/ddd5137c-05ce-42f6-ad3b-6215cff6abe9.jpeg" 
                  alt="FETRARISON" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences */}
        <section id="competences" className={`py-16 ${activeSection === 'competences' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mes Compétences
          </h2>
          
          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="autres">Autres</TabsTrigger>
            </TabsList>
            
            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'REACT ADMIN'].map((skill) => (
                  <Card key={skill} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{skill}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['JAVA', 'MYSQL', 'POSTGRES', 'API REST', 'PHP'].map((skill) => (
                  <Card key={skill} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{skill}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="autres" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Git', 'GitHub', 'Responsive Design', 'TRELLO', 'Méthode Agile'].map((skill) => (
                  <Card key={skill} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{skill}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Section Projets */}
        <section id="projets" className={`py-16 ${activeSection === 'projets' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mes Projets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-sky-200 dark:bg-sky-900 flex items-center justify-center">
                <Icons.Briefcase className="w-16 h-16 text-sky-600 dark:text-sky-400" />
              </div>
              <CardHeader>
                <CardTitle>LOTUS BUNGALOW</CardTitle>
                <CardDescription>Mai 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Un concours a été organisé par le propriétaire de l’hôtel pour concevoir un site vitrine pour son établissement situé à Madagascar. 
                  Le site a été réalisé uniquement en JavaScript.
                </p>
              </CardContent>
            
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-sky-200 dark:bg-sky-900 flex items-center justify-center">
                <Icons.Briefcase className="w-16 h-16 text-sky-600 dark:text-sky-400" />
              </div>
              <CardHeader>
                <CardTitle>SITE TAPAKILA EVENT</CardTitle>
                <CardDescription>2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                 Tapakila est un site de gestion d’événements et de réservation de billets, 
                 similaire à TicketPlace. avec un tableau de bord créé avec React, Next.js et React-Admin.
                  L’application permet de gérer les événements,
                  les places et les réservations facilement.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Icons.Code className="w-4 h-4" /> Code
                </Button>
                <Button size="sm" className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600">
                  <Icons.ExternalLink className="w-4 h-4" /> Demo
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-sky-200 dark:bg-sky-900 flex items-center justify-center">
                <Icons.Briefcase className="w-16 h-16 text-sky-600 dark:text-sky-400" />
              </div>
              <CardHeader>
                <CardTitle>GARAGE MOTO PIÈCES</CardTitle>
                <CardDescription> mai 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Garage Moto Pièce est un site web développé entièrement avec Symfony pour un garage situé à Fianarantsoa.
                   Il permet la gestion de la vente de pièces détachées,
                   ainsi que la présentation des services offerts pour motos et véhicules.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Icons.Code className="w-4 h-4" /> Code
                </Button>
                <Button size="sm" className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600">
                  <Icons.ExternalLink className="w-4 h-4" /> Demo
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-sky-200 dark:bg-sky-900 flex items-center justify-center">
                <Icons.Briefcase className="w-16 h-16 text-sky-600 dark:text-sky-400" />
              </div>
              <CardHeader>
                <CardTitle>CHAMPIONNAT FOOT 2025</CardTitle>
                <CardDescription> Mai 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                 CHAMPIONNAT FOOT 2025 est une application entièrement développée avec Spring Boot,
                  permettant la gestion des joueurs, entraîneurs, clubs et transferts. 
                 Le projet est divisé en deux parties distinctes mais synchronisées pour assurer une meilleure organisation et modularité.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Icons.Code className="w-4 h-4" /> Code
                </Button>
                <Button size="sm" className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600">
                  <Icons.ExternalLink className="w-4 h-4" /> Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Section Formation */}
        <section id="formation" className={`py-16 ${activeSection === 'formation' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Formation
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-sky-300 dark:border-sky-700 pl-8 ml-4 pb-16">
              <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  HAUTE ECOLE D'INFORMATIQUE, IVANDRY
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-medium">
                  2ÈME ANNÉE DE LICENCE - Actuellement
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Formation approfondie en développement web, programmation orientée objet,
                  bases de données, et méthodologies de développement agile.
                </p>
              </div>
              
              <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-[200px]"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Lycée Saint Jean, AMBOHIJANAKA
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-medium">
                  Baccalauréat - 2022/2023
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Obtention du baccalauréat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className={`py-16 ${activeSection === 'contact' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Me Contacter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Informations de contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-sky-100 dark:bg-sky-900 p-3 rounded-full">
                    <Icons.Mail className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:fetrarison5@gmail.com" className="text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                      fetrarison5@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-sky-100 dark:bg-sky-900 p-3 rounded-full">
                    <Icons.Github className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <a href="https://github.com/fetrarison" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                      github.com/fetrarison
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question concernant mes services.
                    Je suis disponible pour des opportunités de freelance ou des postes à temps plein.
                  </p>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a href="https://github.com/fetrarison" target="_blank" rel="noopener noreferrer">
                        <Icons.Github className="w-5 h-5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}