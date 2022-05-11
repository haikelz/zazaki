import Link from "next/link";

const List = () => {
  const NavList = [
    { id: "a", text: "Tentang", href: "/tentang" },
    { id: "b", text: "Projects", href: "/projects" },
    { id: "c", text: "Kontak", href: "/kontak" },
  ];
  return (
    <>
      <div className="flex justify-center items-center bg-slate-200 dark:bg-slate-800 flex-col">
        {NavList.map((nav) => (
          <Link href={nav.href} key={nav.id} passHref>
            <p className="cursor-pointer hover:text-red-500 px-3 py-2 rounded-md text-base font-medium">
              {nav.text}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default List;
