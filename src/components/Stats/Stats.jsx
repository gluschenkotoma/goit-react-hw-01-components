import { StatsList, StatsListItem, Label, Quantity } from './Stats.styled';
export const Stats = ({ stats: { followers, likes, views } }) => {
  return (
    <StatsList>
      <StatsListItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsListItem>
      <StatsListItem>
        <Label>Views</Label>
        <Quantity>{likes}</Quantity>
      </StatsListItem>
      <StatsListItem>
        <Label>Likes</Label>
        <Quantity>{views}</Quantity>
      </StatsListItem>
    </StatsList>
  );
};
