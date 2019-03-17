import React from 'react';
import styled from 'styled-components';
import { string, number, node, func } from 'prop-types';
import { connect } from 'react-redux';
import { vote } from 'store/modules/posts';

import { Vote } from 'components';

const PostStyled = styled.div`
  align-items: stretch;
  display: flex;
  text-decoration: none;

  + div {
    border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

const ContentPost = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  line-height: 24px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: stretch;

  > a {
    justify-content: center;
    color: ${({ theme }) => theme.colors.dark};
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: -16px;
    padding: 16px;
    text-decoration: none;
  }

  h3 {
    font-size: 1.6em;
    font-weight: ${({ theme }) => theme.font.semibold};
    margin: 0 0 4px;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1.4em;
    margin: 0;

    box-icon {
      margin: 0 4px 0 8px;
      fill: ${({ theme }) => theme.colors.darkGray};
    }

    em {
      color: ${({ theme }) => theme.colors.orange};
      font-style: normal;
      margin-left: 4px;
    }

    span {
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

export const Post = ({ voteScore, children, id, vote }) => {
  return (
    <PostStyled>
      <Vote voteScore={voteScore} vote={vote} id={id} />
      <ContentPost>{children}</ContentPost>
    </PostStyled>
  );
};

Post.propTypes = {
  category: string.isRequired,
  id: string.isRequired,
  voteScore: number.isRequired,
  children: node.isRequired,
  vote: func.isRequired,
};

export default connect(
  null,
  { vote }
)(Post);
