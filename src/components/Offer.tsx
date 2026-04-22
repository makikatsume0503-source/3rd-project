import { ActionBox } from './ActionBox';
import type { ActionBoxProps } from './ActionBox';

export const Offer: React.FC<ActionBoxProps> = (props) => {

    return (
        <section className="py-20 bg-[#0c1829] border-t border-[#d4af37]/20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="w-full max-w-2xl mx-auto text-center">


                    <ActionBox {...props} />
                </div>


            </div>
        </section>
    );
};
