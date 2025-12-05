const TestimonialCard = ({ image, name, review, rating }) => {
  return (
    <div className="p-6 border rounded-xl shadow bg-white">
      <p className="text-gray-700 italic">“{review}”</p>

      <div className="flex items-center gap-3 mt-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-yellow-500">{"★".repeat(rating)}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
