import { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: IProps) {
  return (
    <div className="flex flex-col p-8 bg-[#F3F5F7] space-y-4 w-64">
      <span>{icon}</span>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-md text-gray-500">{description}</p>
    </div>
  );
}

export default FeatureCard;
