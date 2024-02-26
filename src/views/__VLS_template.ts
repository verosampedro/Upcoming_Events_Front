import HeaderTemplate from '@/components/Home/HeaderTemplate.vue';
import CarrouselFavourites from '@/components/Home/CarrouselFavourites.vue';
import PastEventsUser from '@/components/PastEventsUser.vue';
import UserCards from '@/components/UserCards.vue';
import FooterTemplate from '@/components/Home/FooterTemplate.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './HomeView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'HeaderTemplate', typeof __VLS_localComponents, "HeaderTemplate", "HeaderTemplate", "HeaderTemplate"> &
__VLS_WithComponent<'CarrouselFavourites', typeof __VLS_localComponents, "CarrouselFavourites", "CarrouselFavourites", "CarrouselFavourites"> &
__VLS_WithComponent<'UserCards', typeof __VLS_localComponents, "UserCards", "UserCards", "UserCards"> &
__VLS_WithComponent<'PastEventsUser', typeof __VLS_localComponents, "PastEventsUser", "PastEventsUser", "PastEventsUser"> &
__VLS_WithComponent<'FooterTemplate', typeof __VLS_localComponents, "FooterTemplate", "FooterTemplate", "FooterTemplate">;
__VLS_intrinsicElements.main; __VLS_intrinsicElements.main;
__VLS_components.HeaderTemplate;
// @ts-ignore
[HeaderTemplate,];
__VLS_components.CarrouselFavourites;
// @ts-ignore
[CarrouselFavourites,];
__VLS_components.UserCards;
// @ts-ignore
[UserCards,];
__VLS_components.PastEventsUser;
// @ts-ignore
[PastEventsUser,];
__VLS_components.FooterTemplate;
// @ts-ignore
[FooterTemplate,];
{
const __VLS_0 = __VLS_intrinsicElements["main"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'HeaderTemplate' extends keyof typeof __VLS_ctx ? { 'HeaderTemplate': typeof __VLS_ctx.HeaderTemplate; } : typeof __VLS_resolvedLocalAndGlobalComponents).HeaderTemplate;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { HeaderTemplate: typeof __VLS_5; }).HeaderTemplate;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as 'CarrouselFavourites' extends keyof typeof __VLS_ctx ? { 'CarrouselFavourites': typeof __VLS_ctx.CarrouselFavourites; } : typeof __VLS_resolvedLocalAndGlobalComponents).CarrouselFavourites;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { CarrouselFavourites: typeof __VLS_10; }).CarrouselFavourites;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = ({} as 'UserCards' extends keyof typeof __VLS_ctx ? { 'UserCards': typeof __VLS_ctx.UserCards; } : typeof __VLS_resolvedLocalAndGlobalComponents).UserCards;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { UserCards: typeof __VLS_15; }).UserCards;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = ({} as 'PastEventsUser' extends keyof typeof __VLS_ctx ? { 'PastEventsUser': typeof __VLS_ctx.PastEventsUser; } : typeof __VLS_resolvedLocalAndGlobalComponents).PastEventsUser;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { PastEventsUser: typeof __VLS_20; }).PastEventsUser;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
const __VLS_25 = ({} as 'FooterTemplate' extends keyof typeof __VLS_ctx ? { 'FooterTemplate': typeof __VLS_ctx.FooterTemplate; } : typeof __VLS_resolvedLocalAndGlobalComponents).FooterTemplate;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
({} as { FooterTemplate: typeof __VLS_25; }).FooterTemplate;
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
