const List = () => {
  const NavList = [
    { id: "a", text: "Tentang", href: "/tentang" },
    { id: "b", text: "Projects", href: "/projects" },
    { id: "c", text: "Kontak", href: "/kontak" },
  ];
  return (
    <>
      <div class="flex justify-center items-center bg-slate-200 dark:bg-slate-800 flex-col">
        {NavList.map((nav) => (
          <a
            class="cursor-pointer hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
            href={nav.href}
          >
            {nav.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default List;
