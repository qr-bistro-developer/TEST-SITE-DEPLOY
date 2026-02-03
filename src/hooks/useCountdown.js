import { useEffect, useState } from "react";
import _ from "lodash";
import dayjs from "dayjs";

export const useCountdown = (expiresIn) => {
  const [countdown, setCountdown] = useState(0);
  const [filterName, setFilterName] = useState(null);

  useEffect(() => {
    if (!_.isNil(expiresIn)) {
      const now = dayjs().unix();
      setCountdown(_.max([expiresIn - now, 0]));
    }
  }, [expiresIn]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => _.max([prev - 1, 0]));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const formatTime = (time) => {
    const hours = _.floor(time / 3600);
    const minutes = _.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (hours > 0) {
      return `${hours}:${_.padStart(minutes, 2, "0")}:${_.padStart(seconds, 2, "0")} hour`;
    }
    if (minutes > 0) {
      return `${minutes}:${_.padStart(seconds, 2, "0")} min`;
    }
    return `${seconds} sec`;
  };

  const result = {
    countdownFormatted: formatTime(countdown),
    isExpired: countdown <= 0,
  };
  return result;
};
