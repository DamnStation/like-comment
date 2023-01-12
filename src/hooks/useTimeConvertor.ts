const useTimeConvertor = (props: number) => {
  const mind = props % (60 * 60);
  const minutes = Math.floor(mind / 60);
  const secd = mind % 60;
  const seconds = Math.ceil(secd);
  return { minutes, seconds };
};

export default useTimeConvertor;
