const TeamCard = ({ image, name, role, bio }) => {
  return (
    <div className="p-6 border rounded-xl shadow text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />

      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <p className="text-gray-600 mt-3">{bio}</p>
    </div>
  );
};
export default TeamCard;
