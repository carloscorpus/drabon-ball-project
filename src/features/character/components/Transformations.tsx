import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import type { Transformation } from '../interfaces/character.interface';

interface Props {
    transformations: Transformation[] | null | undefined;
}

export const Transformations = ({ transformations }: Props) => {
    return (
        <section>
            {transformations && transformations.length > 0 && (
                <>
                    <h2 className="font-dbz text-3xl md:text-4xl lg:text-5xl text-text-primary-light dark:text-text-primary-dark mb-4">
                        Transformations
                    </h2>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        spaceBetween={8}
                        className="mySwiper"
                    >
                        {transformations.map((transformation) => {
                            return (
                                <SwiperSlide
                                    key={transformation.id}
                                    className="bg-surface-light dark:bg-surface-dark rounded-lg border-2 border-bd-light dark:border-bd-dark p-4 cursor-pointer  hover:backdrop-blur-xs hover:bg-surface-light/50 dark:hover:bg-surface-dark/50 transition duration-300 h-auto! flex"
                                >
                                    <div className="flex flex-col w-full h-full">
                                        <figure className="w-full">
                                            <img
                                                src={transformation.image}
                                                alt={transformation.name}
                                                className="w-full h-100 object-contain"
                                            />
                                        </figure>
                                        <div className="pt-4 flex flex-col">
                                            <div className="text-center">
                                                <h2 className="text-base md:text-3xl font-dbz text-text-primary-light dark:text-text-primary-dark">
                                                    {transformation.name}
                                                </h2>
                                            </div>
                                            <div className="mt-auto py-2">
                                                <p className="text-center">
                                                    Ki base:
                                                    <span className="ml-2 bg-elevated-light dark:bg-elevated-dark px-3 py-1 rounded-lg">
                                                        {transformation.ki}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </>
            )}
        </section>
    );
};
