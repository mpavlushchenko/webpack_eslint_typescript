import React from 'react';
import { Metadata } from './types';
import { addMetadata, bind, BaseEntity } from './decorators';
import CreateElement from '../../Components/Elements/CreateElement';
import Notify from '../../services/notifyTypes';
import Counter from '../../Components/Counter';

interface BannerProps {
  readonly userName: string;
  readonly country?: string;
}
interface BannerState {
  projectName: string;
  clicks: number;
}
type UserMetadata = Pick<Metadata, 'id' | 'created' | 'title' | 'postURL'>;

interface MetaData extends UserMetadata {
  title: string;
  postURL: string;
}

interface Banner extends MetaData {}

@BaseEntity
@addMetadata
class Banner extends React.Component<BannerProps, BannerState> {
  static notifyOnChange<T>(value: T): T[] {
    Notify.success(value);

    return [value];
  }

  state: BannerState = {
    projectName: 'Pet',
    clicks: 0,
  };

  getMetadata(): UserMetadata {
    const { id, created, title, postURL } = this;
    return { id, created, title, postURL };
  }

  @bind
  clickHandler() {
    Banner.notifyOnChange('Clicked');
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  }

  render() {
    const { userName } = this.props;
    const { projectName, clicks } = this.state;
    const { title, postURL } = this.getMetadata();

    return (
      <div>
        <Counter />
        <h2 className="gradient__text">Metadata:</h2>
        <ul className="section__gradient">
          <li className="gradient__text">{title}</li>
          <li className="gradient__text">{postURL}</li>
        </ul>
        <p className="">{userName}</p>
        <h5>Project Name: {projectName}</h5>

        <div className="card">rfrfrfrfrf</div>

        <button type="button" onClick={this.clickHandler}>
          click <span>{clicks}</span>
        </button>

        <CreateElement elementType="h2">Title</CreateElement>
      </div>
    );
  }
}

export default Banner;
