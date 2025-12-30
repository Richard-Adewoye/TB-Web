// constants/services.ts
import { Sofa, Book, Users, Clock } from "lucide-react";

export const services = [
  {
    id: "therapy",
    title: "Therapy",
    description:
      "One-on-one or couples sessions focused on deep emotional repair and clarity.",
    icon: Sofa,
    href: "/services/therapy",
  },
  {
    id: "resources",
    title: "Live Class",
    description:
      "Take live classes at your own pace with expert guidance and community support.",
    icon: Book,
    href: "/resources",
  },
  {
    id: "group",
    title: "Self-paced Class",
    description:
      "Our Self-Paced Classes offer flexible learning to fit your schedule.",
    icon: Users,
    href: "/services/group",
  },
  {
    id: "intensive",
    title: "Books",
    description:
      "Explore our collection of relationship-focused books for deeper understanding.",
    icon: Clock,
    href: "/programs/intensive",
  },
];
