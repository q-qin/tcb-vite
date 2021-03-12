import { RouteRecordRaw } from "vue-router";

type RouteMeta = {
  title: string
  icon: string
};

export type RouteConfig = RouteRecordRaw & {
  hidden?: boolean
  children?: RouteConfig[]
  meta?: Partial<RouteMeta>
}