import React from 'react';
import {Dimensions} from 'react-native';
import Larger from './larger';
import Normal from './normal';

interface Props {
  uri?: string;
  name?: string;
  job?: string;
  rating?: number;
  larger?: boolean;
  age?: number;
  provider?: boolean;
  providerPress?: (pointerInside: boolean) => void | undefined;
}

const Card: React.FC<Props> = ({
  uri,
  name,
  job,
  rating,
  larger,
  age,
  provider,
  providerPress,
}: Props) => {
  if (larger === true) {
    return (
      <Larger
        uri={uri}
        name={name}
        job={job}
        rating={rating}
        age={age}
        provider={provider}
        providerPress={providerPress}
      />
    );
  }
  return <Normal uri={uri} name={name} job={job} rating={rating} />;
};

export default Card;
