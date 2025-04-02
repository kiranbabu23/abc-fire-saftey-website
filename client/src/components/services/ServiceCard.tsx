import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
    <div className="h-48 bg-primary bg-opacity-10 flex items-center justify-center">
      {icon}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-neutral-500">{title}</h3>
      <p className="text-neutral-400 mb-4">{description}</p>
      <Link href="/services">
        <a className="text-primary font-medium hover:text-red-700 transition-all">Learn more →</a>
      </Link>
    </div>
  </div>
);

export default ServiceCard;
