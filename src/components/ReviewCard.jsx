import { Star } from "@phosphor-icons/react";

const ReviewCard = () => {
    return (
        <div>
            <div className="flex gap-3">
                <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover" src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/09/avatar.jpg" alt="" />
                </div>
                <div>
                    <p>Mr random</p>
                    <div className="flex items-center">
                        <Star size={15} weight="fill" />
                        <Star size={15} weight="fill" />
                        <Star size={15} weight="fill" />
                        <Star size={15} />
                        <Star size={15} />
                    </div>
                </div>
            </div>
            <p className="heading mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem, tempore hic ullam tempora doloribus pariatur omnis harum architecto ipsam veniam totam cumque? Minus repellendus, deserunt ipsa quasi perferendis officia vitae dignissimos. Vero quas corporis, optio quam quaerat quis architecto ullam quo sed a fuga dolore officia ducimus! Reiciendis quisquam expedita impedit quo, officia eaque. Quasi eius molestiae corrupti nam nemo neque? Repellendus id ab voluptatem at libero omnis, repellat et illum. Eum omnis, ipsum nobis consectetur assumenda culpa ipsa explicabo voluptatum officia, laudantium distinctio expedita placeat enim sunt deserunt dolor corporis quia vero esse voluptate. Adipisci praesentium incidunt esse.
            </p>
        </div>
    )
}

export default ReviewCard;