const Loading = () => {
  return (
    <div className=" inset-0 flex items-center justify-center absolute">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-gray-200 border-blue-600"></div>
    </div>
  );
};
export default Loading;
