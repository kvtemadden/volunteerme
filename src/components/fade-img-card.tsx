interface FadeImgCardProps {
  title: string;
  description?: string;
  imageUrl: string;
}

export const FadeImgCard: React.FC<FadeImgCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="card-shadow relative mx-auto h-96 w-full overflow-hidden rounded-2xl bg-cover bg-center p-0 sm:w-[250px] sm:max-w-[300px] lg:min-w-[300px]"
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(transparent 0%, rgb(107, 33, 168) 100%)",
        }}
      >
        <div className="flex h-full flex-col justify-end gap-4 pb-4">
          <h3 className="rounded-2xl px-6 text-left text-4xl font-black leading-none tracking-tight text-primary-foreground drop-shadow-sm sm:text-xl lg:text-4xl">
            {title}
          </h3>
          <p className="mb-4 rounded-2xl px-6 text-left text-xl font-medium leading-none tracking-tight text-primary-foreground drop-shadow-sm sm:text-2xl lg:text-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
