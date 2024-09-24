interface CircleImgCardProps {
  title: string;
  imageUrl: string;
}

export const CircleImgCard: React.FC<CircleImgCardProps> = ({
  title,
  imageUrl,
}) => {
  return (
    // <div className="card-shadow relative h-96 overflow-hidden rounded-2xl bg-cover bg-bottom p-2">
    //   <div className="absolute inset-0 bg-secondary">
    //     <div
    //       className="absolute z-0 rounded-full"
    //       style={{
    //         width: "26rem",
    //         height: "26rem",
    //         top: "2rem",
    //         right: "6rem",
    //         backgroundPosition: "25% -83%",
    //         backgroundSize: "90%",
    //         transform: "translate(50%, -50%)",
    //         backgroundImage: `url(${imageUrl})`,
    //       }}
    //     ></div>
    //     <div
    //       className="absolute rounded-full"
    //       style={{
    //         width: "22rem",
    //         height: "22rem",
    //         top: "2rem",
    //         right: "6rem",
    //         border: "25px solid rgb(245, 208, 254)",
    //         transform: "translate(50%, -50%)",
    //       }}
    //     ></div>
    //     <div
    //       className="absolute rounded-full"
    //       style={{
    //         width: "14rem",
    //         height: "14rem",
    //         top: "2rem",
    //         right: "6rem",
    //         border: "25px solid rgb(245, 208, 254)",
    //         transform: "translate(50%, -50%)",
    //       }}
    //     ></div>
    //     <div className="flex h-full">
    //       <div
    //         className="mb-2 mt-auto rounded-2xl p-6 text-4xl font-semibold leading-none tracking-tight drop-shadow-sm"
    //         style={{ color: "rgb(74, 4, 78)" }}
    //       >
    //         {title}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="card-shadow relative h-96 min-w-[250px] max-w-[300px] overflow-hidden rounded-2xl bg-cover bg-bottom p-2">
      <div className="absolute inset-0 bg-secondary">
        <div
          className="absolute z-0 rounded-full"
          style={{
            width: "26rem",
            height: "26rem",
            top: "2rem",
            right: "6rem",
            backgroundPosition: "25% -83%",
            backgroundSize: "90%",
            transform: "translate(50%, -50%)",
            backgroundImage: `url("${imageUrl}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGxhdWdoaW5nfGVufDB8fDB8fHww")`,
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: "22rem",
            height: "22rem",
            top: "2rem",
            right: "6rem",
            border: "25px solid rgb(233, 213, 255)",
            transform: "translate(50%, -50%)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "14rem",
            height: "14rem",
            top: "2rem",
            right: "6rem",
            border: "25px solid rgb(233, 213, 255)",
            transform: "translate(50%, -50%)",
          }}
        />

        <div className="flex h-full">
          <div className="mb-2 mt-auto rounded-2xl p-6 text-left text-4xl font-semibold leading-none tracking-tight text-secondary-foreground drop-shadow-sm">
            Create
            <br />
            <span style={{ color: "rgb(147, 51, 234)" }}>
              color scales
              <br />
            </span>
            in seconds.
          </div>
        </div>
      </div>
    </div>
  );
};
