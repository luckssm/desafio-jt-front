import { reviewNoteToText } from "../../../services/utils/helpers/review";

import { FilterContainer } from "../FilterContainer";

export const ReviewsFilter = () => {
  const reviewScoresAmount = 5;

  const ReviewScore = ({ reviewNote, reviewAmount }) => {
    const resolveReviewWidth = () => {
      if (reviewNote >= reviewScoresAmount + 1) {
        return `${reviewNote}0%`;
      } else {
        return "10%";
      }
    };

    const resolveReviewLabel = () => {
      return `${reviewNoteToText({ reviewNote })} (${reviewAmount})`;
    };

    const resolveReviewNoteText = () => {
      if (reviewNote > 10 - reviewScoresAmount) {
        return `${reviewNote}+`;
      }
    };

    return (
      <button className="flex items-center">
        <div className="flex w-[190px] h-[30px] bg-graygray-20 mr-2">
          <div
            className="flex items-center h-full bg-supportsupport-03 pl-2"
            style={{ width: resolveReviewWidth() }}
          >
            <p className="p4 text-graygray-00">{resolveReviewNoteText()}</p>
          </div>
        </div>
        <div>
          <p className="p4 text-graygray-70">{resolveReviewLabel()}</p>
        </div>
      </button>
    );
  };

  const renderReviewFilters = () => {
    let reviewScores = [];
    for (let i = 9; i >= reviewScoresAmount; i--) {
      reviewScores.push(
        <div key={i} className="mb-3">
          <ReviewScore reviewNote={i} reviewAmount={543} />
        </div>,
      );
    }
    return reviewScores;
  };

  return (
    <FilterContainer filterName={"Review Score"}>
      {renderReviewFilters()}
    </FilterContainer>
  );
};
