import { reviewNoteToText } from "../../services/utils/helpers/review";

const ReviewRating = ({ reviewNote, reviewAmount }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center bg-brand-color-blue w-10 h-10 rounded-sm">
        <p className="text-white">{reviewNote}</p>
      </div>
      <p className="p3 text-brand-color-black ml-2">
        {reviewNoteToText({ reviewNote })}
      </p>
      <p className="p3 text-graygray-40 ml-2">({reviewAmount} Reviews)</p>
    </div>
  );
};

export default ReviewRating;
