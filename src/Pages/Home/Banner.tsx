import React from 'react';
import { Metadata } from './types';
import { addMetadata, bind } from './decorators';
import CreateElement from '../../Components/Elements/CreateElement';
import Notify from '../../services/notifyTypes';

interface BannerProps {
  readonly userName: string;
  readonly country?: string;
}
interface BannerState {
  projectName: string;
  clicks: number;
}
type UserMetadata = Pick<Metadata, 'title' | 'postURL'>;

interface MetaData extends UserMetadata {
  title: string;
  postURL: string;
}

interface Banner extends MetaData {}

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
    const { title, postURL } = this;
    return { title, postURL };
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
        <h2>Metadata:</h2>
        <ul>
          <li>{title}</li>
          <li>{postURL}</li>
        </ul>
        <p>{userName}</p>
        <h5>Project Name: {projectName}</h5>

        <button type="button" onClick={this.clickHandler}>
          click <span>{clicks}</span>
        </button>

        <CreateElement elementType="h2">Title</CreateElement>
      </div>
    );
  }
}

export default Banner;
