const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="text-2xl w-full text-zinc-600 flex justify-center py-10 absolute top-[5%]">
          documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter text-zinc-900 font-semibold">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
