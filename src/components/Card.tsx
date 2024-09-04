// Card.tsx or Card.ts (Pastikan Anda memperbarui file ini)

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string; // Tambahkan className sebagai properti opsional
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
