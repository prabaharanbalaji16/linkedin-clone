import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';

function Widgets() {
    const newsArticle = (heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle('20 crore vaccine doses in 130 days','Top news - 56,627 readers')}
            {newsArticle('Consider the mid-life career switch','10h age - 878 readers')}
            {newsArticle('WhatsApp vs Government o privacy','1h ago')}
            {newsArticle('What to do before negotiating pay','1d ago - 22,752 readers')}
        </div>
    )
}

export default Widgets
