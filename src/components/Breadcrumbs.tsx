import React, { FC, useMemo } from "react";

type crumb = {
  label: string | React.ReactNode;
  route: string;
};

interface item {
  label: string | React.ReactNode;
  route: string;
  children?: item | undefined;
}

interface BreadcrumbsProps {
  item: item;
  seperator?: string | React.ReactNode;
  labelElementWrapperClasName?: string;
  seperatorClassName?: string;
  wrapperClassName?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const {
    item,
    seperator = "/",
    labelElementWrapperClasName,
    seperatorClassName,
    wrapperClassName,
  } = props;

  const itemsToCrumbs = (item: item) => {
    const crumb: crumb = {} as crumb;
    const crumbs: crumb[] = [];
    Object.keys(item).forEach((key) => {
      if (key === "label") crumb.label = item.label;
      else if (key === "route") {
        crumb.route = item.route;
        crumbs.push(crumb);
      } else if (key === "children") {
        if (item.children) {
          crumbs.push(...itemsToCrumbs(item.children));
        }
        return crumbs;
      }
    });
    return crumbs;
  };

  const crumbs = useMemo(() => {
    return itemsToCrumbs(item);
  }, [item]);

  return (
    <div
      className={`flex justify-center w-full p-2 border border-default-border ${wrapperClassName}`}
    >
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex gap-x-2 text-center">
          <>
            {index !== 0 ? (
              React.isValidElement(seperator) ? (
                { seperator }
              ) : (
                <p className={seperatorClassName}> {seperator} </p>
              )
            ) : null}
            {React.isValidElement(crumb.label) ? (
              <div
                className={`cursor-pointer ${labelElementWrapperClasName}`}
                onClick={() => console.log(crumb.route)}
              >
                {crumb.label}
              </div>
            ) : (
              <p
                onClick={() => console.log(crumb.route)}
                className={`pr-2 cursor-pointer ${
                  index === crumbs.length - 1
                    ? "text-primary"
                    : "text-ink-light"
                } `}
              >
                {crumb.label}
              </p>
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
