import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PostModel = runtime.Types.Result.DefaultSelection<Prisma.$PostPayload>;
export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
};
export type PostAvgAggregateOutputType = {
    id: number | null;
};
export type PostSumAggregateOutputType = {
    id: number | null;
};
export type PostMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    source: $Enums.Source | null;
    url: string | null;
    createdAt: Date | null;
};
export type PostMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    source: $Enums.Source | null;
    url: string | null;
    createdAt: Date | null;
};
export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    source: number;
    url: number;
    tags: number;
    createdAt: number;
    _all: number;
};
export type PostAvgAggregateInputType = {
    id?: true;
};
export type PostSumAggregateInputType = {
    id?: true;
};
export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    source?: true;
    url?: true;
    createdAt?: true;
};
export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    source?: true;
    url?: true;
    createdAt?: true;
};
export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    source?: true;
    url?: true;
    tags?: true;
    createdAt?: true;
    _all?: true;
};
export type PostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    cursor?: Prisma.PostWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PostCountAggregateInputType;
    _avg?: PostAvgAggregateInputType;
    _sum?: PostSumAggregateInputType;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
};
export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePost[P]> : Prisma.GetScalarType<T[P], AggregatePost[P]>;
};
export type PostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithAggregationInput | Prisma.PostOrderByWithAggregationInput[];
    by: Prisma.PostScalarFieldEnum[] | Prisma.PostScalarFieldEnum;
    having?: Prisma.PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _avg?: PostAvgAggregateInputType;
    _sum?: PostSumAggregateInputType;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
};
export type PostGroupByOutputType = {
    id: number;
    title: string;
    source: $Enums.Source;
    url: string;
    tags: string[];
    createdAt: Date;
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
};
type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PostGroupByOutputType[P]>;
}>>;
export type PostWhereInput = {
    AND?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    OR?: Prisma.PostWhereInput[];
    NOT?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    id?: Prisma.IntFilter<"Post"> | number;
    title?: Prisma.StringFilter<"Post"> | string;
    source?: Prisma.EnumSourceFilter<"Post"> | $Enums.Source;
    url?: Prisma.StringFilter<"Post"> | string;
    tags?: Prisma.StringNullableListFilter<"Post">;
    createdAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
};
export type PostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    OR?: Prisma.PostWhereInput[];
    NOT?: Prisma.PostWhereInput | Prisma.PostWhereInput[];
    title?: Prisma.StringFilter<"Post"> | string;
    source?: Prisma.EnumSourceFilter<"Post"> | $Enums.Source;
    url?: Prisma.StringFilter<"Post"> | string;
    tags?: Prisma.StringNullableListFilter<"Post">;
    createdAt?: Prisma.DateTimeFilter<"Post"> | Date | string;
}, "id">;
export type PostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PostCountOrderByAggregateInput;
    _avg?: Prisma.PostAvgOrderByAggregateInput;
    _max?: Prisma.PostMaxOrderByAggregateInput;
    _min?: Prisma.PostMinOrderByAggregateInput;
    _sum?: Prisma.PostSumOrderByAggregateInput;
};
export type PostScalarWhereWithAggregatesInput = {
    AND?: Prisma.PostScalarWhereWithAggregatesInput | Prisma.PostScalarWhereWithAggregatesInput[];
    OR?: Prisma.PostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PostScalarWhereWithAggregatesInput | Prisma.PostScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Post"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    source?: Prisma.EnumSourceWithAggregatesFilter<"Post"> | $Enums.Source;
    url?: Prisma.StringWithAggregatesFilter<"Post"> | string;
    tags?: Prisma.StringNullableListFilter<"Post">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Post"> | Date | string;
};
export type PostCreateInput = {
    title: string;
    source: $Enums.Source;
    url: string;
    tags?: Prisma.PostCreatetagsInput | string[];
    createdAt?: Date | string;
};
export type PostUncheckedCreateInput = {
    id?: number;
    title: string;
    source: $Enums.Source;
    url: string;
    tags?: Prisma.PostCreatetagsInput | string[];
    createdAt?: Date | string;
};
export type PostUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumSourceFieldUpdateOperationsInput | $Enums.Source;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.PostUpdatetagsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumSourceFieldUpdateOperationsInput | $Enums.Source;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.PostUpdatetagsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostCreateManyInput = {
    id?: number;
    title: string;
    source: $Enums.Source;
    url: string;
    tags?: Prisma.PostCreatetagsInput | string[];
    createdAt?: Date | string;
};
export type PostUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumSourceFieldUpdateOperationsInput | $Enums.Source;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.PostUpdatetagsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PostUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumSourceFieldUpdateOperationsInput | $Enums.Source;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.PostUpdatetagsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type PostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PostAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PostSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PostCreatetagsInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumSourceFieldUpdateOperationsInput = {
    set?: $Enums.Source;
};
export type PostUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    source?: boolean;
    url?: boolean;
    tags?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["post"]>;
export type PostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    source?: boolean;
    url?: boolean;
    tags?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["post"]>;
export type PostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    source?: boolean;
    url?: boolean;
    tags?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["post"]>;
export type PostSelectScalar = {
    id?: boolean;
    title?: boolean;
    source?: boolean;
    url?: boolean;
    tags?: boolean;
    createdAt?: boolean;
};
export type PostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "source" | "url" | "tags" | "createdAt", ExtArgs["result"]["post"]>;
export type $PostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Post";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        source: $Enums.Source;
        url: string;
        tags: string[];
        createdAt: Date;
    }, ExtArgs["result"]["post"]>;
    composites: {};
};
export type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PostPayload, S>;
export type PostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostCountAggregateInputType | true;
};
export interface PostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Post'];
        meta: {
            name: 'Post';
        };
    };
    findUnique<T extends PostFindUniqueArgs>(args: Prisma.SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PostFindFirstArgs>(args?: Prisma.SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PostFindManyArgs>(args?: Prisma.SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PostCreateArgs>(args: Prisma.SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PostCreateManyArgs>(args?: Prisma.SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PostDeleteArgs>(args: Prisma.SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PostUpdateArgs>(args: Prisma.SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PostDeleteManyArgs>(args?: Prisma.SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PostUpdateManyArgs>(args: Prisma.SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PostUpsertArgs>(args: Prisma.SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PostCountArgs>(args?: Prisma.Subset<T, PostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PostCountAggregateOutputType> : number>;
    aggregate<T extends PostAggregateArgs>(args: Prisma.Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>;
    groupBy<T extends PostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PostGroupByArgs['orderBy'];
    } : {
        orderBy?: PostGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PostFieldRefs;
}
export interface Prisma__PostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PostFieldRefs {
    readonly id: Prisma.FieldRef<"Post", 'Int'>;
    readonly title: Prisma.FieldRef<"Post", 'String'>;
    readonly source: Prisma.FieldRef<"Post", 'Source'>;
    readonly url: Prisma.FieldRef<"Post", 'String'>;
    readonly tags: Prisma.FieldRef<"Post", 'String[]'>;
    readonly createdAt: Prisma.FieldRef<"Post", 'DateTime'>;
}
export type PostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where: Prisma.PostWhereUniqueInput;
};
export type PostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where: Prisma.PostWhereUniqueInput;
};
export type PostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    cursor?: Prisma.PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
export type PostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    cursor?: Prisma.PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
export type PostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    cursor?: Prisma.PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
export type PostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PostCreateInput, Prisma.PostUncheckedCreateInput>;
};
export type PostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PostCreateManyInput | Prisma.PostCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    data: Prisma.PostCreateManyInput | Prisma.PostCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PostUpdateInput, Prisma.PostUncheckedUpdateInput>;
    where: Prisma.PostWhereUniqueInput;
};
export type PostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PostUpdateManyMutationInput, Prisma.PostUncheckedUpdateManyInput>;
    where?: Prisma.PostWhereInput;
    limit?: number;
};
export type PostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PostUpdateManyMutationInput, Prisma.PostUncheckedUpdateManyInput>;
    where?: Prisma.PostWhereInput;
    limit?: number;
};
export type PostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where: Prisma.PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.PostCreateInput, Prisma.PostUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PostUpdateInput, Prisma.PostUncheckedUpdateInput>;
};
export type PostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
    where: Prisma.PostWhereUniqueInput;
};
export type PostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostWhereInput;
    limit?: number;
};
export type PostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostSelect<ExtArgs> | null;
    omit?: Prisma.PostOmit<ExtArgs> | null;
};
export {};
