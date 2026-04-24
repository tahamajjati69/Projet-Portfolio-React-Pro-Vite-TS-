export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Application de Gestion de livraison",
    period: "Déc 2025",
    tags: ["Java", "Java Swing", "MySQL", "JDBC", "NetBeans", "phpMyAdmin"],
    summary:
      "Application desktop de gestion complète d'un restaurant : ne application Java Swing permettant la gestion complète d'un système logistique : colis, livreurs et livraisons.",
    repo: "https://github.com/tahamajjati69/Projet_Java.git",
  },
];