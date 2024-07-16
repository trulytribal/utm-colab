import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/shwirts_logo_2k.png" alt="logo" height={24} width={24} />
        {/* <p className="font-semibold text-white text-2xl ml-2.5">UTM Colab</p> */}
      </div>
    </Link>
  );
};
