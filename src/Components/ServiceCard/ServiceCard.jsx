const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};
export default ServiceCard;
