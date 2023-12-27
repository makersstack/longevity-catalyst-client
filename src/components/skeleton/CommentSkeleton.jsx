import React from 'react';

const CommentSkeleton = ({ cTClass }) => {
  return (
    <div className={`sk_comment cmtSkt ${cTClass}`}>
      <div className="sk_comment_head">
        <div className="sk_comment_user skeleton"></div>
        <div className="sk_comment_name skeleton show_ct_md hXsmT brSm"></div>
        <div className="sk_comment_time skeleton show_ct_sm hXsm brSm"></div>
      </div>
      <div className="sk_comment_message">
        <p className='skeleton hXsm brSm'></p>
        <p className='skeleton hXsm brSm'></p>
        <p className='skeleton hXsm brSm'></p>
      </div>
      <div className="sk_comment_footer">
        <div className='sk_showBar skeleton'></div>
        <div className='sk_replay_btn skeleton show_ct_sm hXsmT brSm'></div>
        <div className='sk_showBar skeleton'></div>
        <div className='sk_showBar skeleton'></div>
      </div>
    </div>
  )
}

export default CommentSkeleton;