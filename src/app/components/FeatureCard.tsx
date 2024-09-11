import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
/**
 * A feature card component that displays a title, description and an icon.
 *
 * @param {{ icon: React.ReactNode, title: string, description: string }} props
 * - The props for this component
 * @returns {JSX.Element} A JSX element representing the feature card
 */
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 p-12 bg-light-grey">
      {/* Display the icon of the feature */}
      {icon}
      {/* Display the title of the feature */}
      <h4 className="text-headline-four text-left text-[#2a254b] font-clash-display">
        {title}
      </h4>
      {/* Display the description of the feature */}
      <p className="text-balance text-base text-left text-[#2a254b]">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
