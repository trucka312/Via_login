import ViaExpressIcon from '../../public/assets/icons/ViaExpressIcon.jsx';
import ViaFastIcon from '../../public/assets/icons/ViaFastIcon.jsx';
import ViaSuperIcon from '../../public/assets/icons/ViaSuperIcon.jsx';
import ViaFreshIcon from '../../public/assets/icons/ViaFreshIcon.jsx';
import ViaInternationalIcon from '../../public/assets/icons/ViaInternationalIcon.jsx';

export const CardService = () => {
  return (
    // container
    <div className='w-full rounded-[.4rem] bg-[#F7F8F9] p-[2.4rem] '>
      <p className='mb-[2.4rem] font-semibold text-[1.9rem] leading-[2.3rem] text-[#0D0F11] text-center'>DỊCH VỤ CỦA CHÚNG TÔI</p>
      <div className="grid grid-cols-2 gap-[2.4rem]">
        <div className="px-[1.6rem] py-[0.8rem] rounded-[0.4rem] bg-[#FFFFFF] ">
          <ViaExpressIcon />
        </div>
        <div className="px-[1.6rem] py-[0.8rem] rounded-[0.4rem] bg-[#FFFFFF] ">
          <ViaFastIcon />
        </div>
        <div className="px-[1.6rem] py-[0.8rem] rounded-[0.4rem] bg-[#FFFFFF] ">
          <ViaSuperIcon />
        </div>
        <div className="px-[1.6rem] py-[0.8rem] rounded-[0.4rem] bg-[#FFFFFF] ">
          <ViaFreshIcon />
        </div>
      </div>

      <div className="mt-[2.4rem] w-full bg-[#FFFFFF] rounded-[0.4rem] px-[1.6rem] py-[0.8rem] items-center">
        <ViaInternationalIcon />
      </div>
    </div>
  );
};

export default CardService;
