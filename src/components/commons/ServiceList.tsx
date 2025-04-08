import { Service } from '../../types';

interface ServiceListProps {
  services: Service[];
  onSelect: (id: string) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, onSelect }) => {
  return (
    <div className="flex flex-col gap-4 w-1/4">
      {services.map(service => (
        <div
          key={service.id}
          onClick={() => onSelect(service.id)}
          className={`cursor-pointer px-4 py-3 rounded-xl border
            border-white
            hover:opacity-100 hover:grayscale-0 transition`}
        >
          <p className="text-white text-sm">{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;